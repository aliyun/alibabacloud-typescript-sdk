// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDRMLicenseRequest extends $dara.Model {
  /**
   * @example
   * AESzB8SQgpACioSEJ3yqiFwruAOUgIvlCx*****
   */
  keyId?: string;
  /**
   * @example
   * http://1111111111.mns.cn-hangzhou.aliyuncs.com
   */
  notifyEndpoint?: string;
  /**
   * @example
   * topic1
   */
  notifyTopicName?: string;
  /**
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @example
   * widevine
   */
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

