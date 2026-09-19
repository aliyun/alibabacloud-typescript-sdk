// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicTemplateCache extends $dara.Model {
  createdTime?: string;
  imageDigest?: string;
  imageSizeMB?: number;
  progress?: number;
  readyTime?: string;
  status?: string;
  statusReason?: string;
  teamID?: string;
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      imageDigest: 'imageDigest',
      imageSizeMB: 'imageSizeMB',
      progress: 'progress',
      readyTime: 'readyTime',
      status: 'status',
      statusReason: 'statusReason',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      imageDigest: 'string',
      imageSizeMB: 'number',
      progress: 'number',
      readyTime: 'string',
      status: 'string',
      statusReason: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

