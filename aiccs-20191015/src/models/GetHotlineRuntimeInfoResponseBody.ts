// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineRuntimeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A return value of "Success" indicates that the request succeeded.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Hotline runtime information.
   * 
   * @example
   * {"buId":905,"phoneToken":"roESVzzgD1ytmG0W6nMkWinI6fbpKovm14fBhA0NsYPyi/srX/G0SvNB2z96AYiqy1vxQHiaFOdZSxtsAubdgr2kjs2yas7COO5dukQpsOLq9iNI4U6sKlcvaBi8xsyUr/hyqCdTVZDcYCOq0lH6eeNIQK/f7/gWqIw****=","isNeedWorkShift":false,"servicerId":741018,"accConfigUrl":"pre-acc-cs-public.alibaba-inc.com","agentBasicCode":"AgentCheckout","startWorkToReady":true,"servicerDn":"2000000001904123","isMaster":"1","tenantId":2001,"depId":1139139,"accTenantId":2001,"phoneData":"{\\"timeStamp\\":164240****,\\"expireTime\\":164257****,\\"dn\\":\\"200000000190****\\",\\"source\\":\\"xspace\\",\\"serviceId\\":741018}","agentBasicDesc":"坐席签出状态"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

