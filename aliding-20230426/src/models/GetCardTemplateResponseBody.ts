// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCardTemplateResponseBodyCommonVariableList extends $dara.Model {
  /**
   * @example
   * 卡片摘要
   */
  description?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * lastMessage
   */
  id?: string;
  /**
   * @example
   * true
   */
  ifPrivateFiled?: boolean;
  /**
   * @example
   * lastMessage
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ifPrivateFiled: 'IfPrivateFiled',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      ifPrivateFiled: 'boolean',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  commonVariableList?: GetCardTemplateResponseBodyCommonVariableList[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * 123
   */
  templateId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      commonVariableList: 'commonVariableList',
      requestId: 'requestId',
      status: 'status',
      templateId: 'templateId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonVariableList: { 'type': 'array', 'itemType': GetCardTemplateResponseBodyCommonVariableList },
      requestId: 'string',
      status: 'string',
      templateId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commonVariableList)) {
      $dara.Model.validateArray(this.commonVariableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

