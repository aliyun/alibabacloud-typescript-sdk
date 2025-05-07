// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterialDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  content?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * jsonLine
   */
  docType?: string;
  /**
   * @example
   * excel
   */
  docTypeList?: string[];
  /**
   * @example
   * true
   */
  generatePublicUrl?: boolean;
  /**
   * @example
   * 69
   */
  id?: number;
  keywords?: string[];
  query?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * 10
   */
  size?: number;
  title?: string;
  /**
   * @example
   * 2023-03-18 03:00:00
   */
  updateTimeEnd?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeList: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywords: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeList: { 'type': 'array', 'itemType': 'string' },
      generatePublicUrl: 'boolean',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docTypeList)) {
      $dara.Model.validateArray(this.docTypeList);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

