// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDocsSummaryTaskRequestDocInfos } from "./CreateDocsSummaryTaskRequestDocInfos";


export class CreateDocsSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docInfos?: CreateDocsSummaryTaskRequestDocInfos[];
  /**
   * @example
   * true
   */
  enableTable?: boolean;
  instruction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docInfos: { 'type': 'array', 'itemType': CreateDocsSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

