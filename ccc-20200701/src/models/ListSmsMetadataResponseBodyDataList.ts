// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsMetadataResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 15772400000****
   */
  aliyunUid?: number;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * MISSED_CALL_NOTIFICATION
   */
  scenario?: string;
  signName?: string;
  /**
   * @example
   * 5ffc1c9a-4d3d-4019-*****-73255fb01d1c
   */
  smsMetadataId?: string;
  /**
   * @example
   * SMS_468xxxx298
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scenario: 'Scenario',
      signName: 'SignName',
      smsMetadataId: 'SmsMetadataId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      scenario: 'string',
      signName: 'string',
      smsMetadataId: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

