// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAnnualDocSummaryTaskRequestDocInfos } from "./CreateAnnualDocSummaryTaskRequestDocInfos";


export class CreateAnnualDocSummaryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  anaYears?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  docInfos?: CreateAnnualDocSummaryTaskRequestDocInfos[];
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
      anaYears: 'anaYears',
      docInfos: 'docInfos',
      enableTable: 'enableTable',
      instruction: 'instruction',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anaYears: { 'type': 'array', 'itemType': 'number' },
      docInfos: { 'type': 'array', 'itemType': CreateAnnualDocSummaryTaskRequestDocInfos },
      enableTable: 'boolean',
      instruction: 'string',
      modelId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.anaYears)) {
      $dara.Model.validateArray(this.anaYears);
    }
    if(Array.isArray(this.docInfos)) {
      $dara.Model.validateArray(this.docInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

