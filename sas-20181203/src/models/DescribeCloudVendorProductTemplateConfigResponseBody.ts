// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorProductTemplateConfigResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"vendors\\":[{\\"vendorType\\":100,\\"vendor\\":\\"CHAITIN\\",\\"displayName\\":\\"Chaitin\\",\\"products\\":[{\\"product\\":\\"webFirewall\\",\\"displayName\\":\\"WAF\\",\\"backendConfig\\":{\\"apiParams\\":{\\"SecretKey\\":{\\"field\\":\\"apiToken\\",\\"format\\":\\"text\\"},\\"SecretId\\":{\\"field\\":\\"endpoint\\",\\"format\\":\\"text\\"},\\"Vendor\\":{\\"field\\":\\"vendor\\",\\"format\\":\\"text\\"},\\"CtdrCloudUserId\\":{\\"field\\":\\"ctdrCloudUserId\\",\\"format\\":\\"text\\"},\\"ExtendInfo\\":{\\"format\\":\\"json\\",\\"fields\\":[\\"product\\",\\"remark\\"]}}},\\"description\\":\\"https://docs.waf-ce.chaitin.cn/%E6%9B%B4%E5%A4%9A%E6%8A%80%E6%9C%AF%E6%96%87%E6%A1%A3/OPENAPI\\",\\"fields\\":[{\\"displayName\\":\\"Endpoint\\",\\"fieldType\\":\\"text\\",\\"prompt\\":\\"Enter an endpoint that is in the IP address:Port number format.\\",\\"required\\":true,\\"fieldId\\":\\"endpoint\\"},{\\"displayName\\":\\"API Token\\",\\"fieldType\\":\\"password\\",\\"required\\":true,\\"fieldId\\":\\"apiToken\\"},{\\"displayName\\":\\"‌Device Name‌ (The cloud_user_id field in the device connection logs will uniquely identify the device)\\",\\"fieldType\\":\\"text\\",\\"required\\":true,\\"fieldId\\":\\"ctdrCloudUserId\\"},{\\"displayName\\":\\"Remark\\",\\"fieldType\\":\\"text\\",\\"required\\":false,\\"fieldId\\":\\"remark\\"}]}]}]}
   */
  data?: string;
  /**
   * @example
   * CD380235-A0B8-540D-A0D5-D6288446****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

