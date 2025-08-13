// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableDefineRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Whether binding is allowed, default is ENABLE
   * 
   * @example
   * ENABLE
   */
  allowBind?: string;
  /**
   * @remarks
   * Charging mode
   * 
   * @example
   * FREE
   */
  chargingMode?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size, default value is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Paging identifier
   * 
   * @example
   * false
   */
  paging?: string;
  /**
   * @remarks
   * Query content
   * 
   * @example
   * age
   */
  queryContent?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Authorization type
   * 
   * @example
   * 1
   */
  roleType?: string;
  /**
   * @remarks
   * Scenario
   * 
   * @example
   * [\\"EVENT_ACTION\\"]
   */
  scenesStr?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * SAF
   */
  source?: string;
  /**
   * @remarks
   * Status.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 变量的title
   */
  title?: string;
  /**
   * @remarks
   * Type
   * 
   * @example
   * [\\"IDENTIFY_SERVICE\\"]
   */
  typesStr?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      allowBind: 'allowBind',
      chargingMode: 'chargingMode',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      paging: 'paging',
      queryContent: 'queryContent',
      regId: 'regId',
      roleType: 'roleType',
      scenesStr: 'scenesStr',
      source: 'source',
      status: 'status',
      title: 'title',
      typesStr: 'typesStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      allowBind: 'string',
      chargingMode: 'string',
      currentPage: 'number',
      pageSize: 'number',
      paging: 'string',
      queryContent: 'string',
      regId: 'string',
      roleType: 'string',
      scenesStr: 'string',
      source: 'string',
      status: 'string',
      title: 'string',
      typesStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

