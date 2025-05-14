// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateFormDataByInstanceIdRequest extends $dara.Model {
  /**
   * @example
   * String
   */
  appType?: string;
  /**
   * @example
   * true
   */
  asynchronousExecution?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ "FINST-J8766S91O2UYN87ZX3XOF1MY8MBA2912BSV0L24" ]
   */
  formInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * true
   */
  ignoreEmpty?: boolean;
  /**
   * @example
   * false
   */
  noExecuteExpression?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\"countrySelectField_l0c1cwiu\":[{\"value\":\"US\"}],\"addressField_l0c1cwiy\":{\"address\":\"111\",\"regionIds\":[460000,469027,469023401],\"regionText\":[{\"en_US\":\"hai+nan+sheng\",\"zh_CN\":\"海南省\"},{\"en_US\":\"cheng+mai+xian\",\"zh_CN\":\"澄迈县\"},{\"en_US\":\"guo+ying+hong+gang+nong+chang\",\"zh_CN\":\"国营红岗农场\"}]}}
   */
  updateFormDataJson?: string;
  /**
   * @example
   * false
   */
  useLatestFormSchemaVersion?: boolean;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      asynchronousExecution: 'AsynchronousExecution',
      formInstanceIdList: 'FormInstanceIdList',
      formUuid: 'FormUuid',
      ignoreEmpty: 'IgnoreEmpty',
      noExecuteExpression: 'NoExecuteExpression',
      systemToken: 'SystemToken',
      updateFormDataJson: 'UpdateFormDataJson',
      useLatestFormSchemaVersion: 'UseLatestFormSchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      asynchronousExecution: 'boolean',
      formInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      formUuid: 'string',
      ignoreEmpty: 'boolean',
      noExecuteExpression: 'boolean',
      systemToken: 'string',
      updateFormDataJson: 'string',
      useLatestFormSchemaVersion: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.formInstanceIdList)) {
      $dara.Model.validateArray(this.formInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

