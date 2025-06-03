// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSurveyJobOfflineRequest extends $dara.Model {
  autoConfirm?: boolean;
  channel?: string;
  cloudType?: string;
  fileName?: string;
  name?: string;
  objectName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfirm: 'autoConfirm',
      channel: 'channel',
      cloudType: 'cloudType',
      fileName: 'fileName',
      name: 'name',
      objectName: 'objectName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfirm: 'boolean',
      channel: 'string',
      cloudType: 'string',
      fileName: 'string',
      name: 'string',
      objectName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

