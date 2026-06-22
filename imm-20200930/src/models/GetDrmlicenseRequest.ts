// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMLicenseRequest extends $dara.Model {
  keyId?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  protectionSystem?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
      protectionSystem: 'ProtectionSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
      protectionSystem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

