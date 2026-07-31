// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArtifactRelease extends $dara.Model {
  artifactRef?: string;
  createdAt?: string;
  description?: string;
  image?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactRef: 'ArtifactRef',
      createdAt: 'CreatedAt',
      description: 'Description',
      image: 'Image',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactRef: 'string',
      createdAt: 'string',
      description: 'string',
      image: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

