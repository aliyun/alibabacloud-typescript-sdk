// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Version extends $dara.Model {
  createdTime?: string;
  description?: string;
  image?: string;
  lastModifiedTime?: string;
  requestId?: string;
  versionId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      image: 'image',
      lastModifiedTime: 'lastModifiedTime',
      requestId: 'requestId',
      versionId: 'versionId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      image: 'string',
      lastModifiedTime: 'string',
      requestId: 'string',
      versionId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

