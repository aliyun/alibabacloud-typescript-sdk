// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMaYiBlockRequestBlockTimes } from "./CreateMaYiBlockRequestBlockTimes";
import { CreateMaYiBlockRequestScope } from "./CreateMaYiBlockRequestScope";


export class CreateMaYiBlockRequest extends $dara.Model {
  blockId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  blockTimes?: CreateMaYiBlockRequestBlockTimes[];
  /**
   * @remarks
   * This parameter is required.
   */
  blockType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creatorEmpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  director?: string[];
  faultVersion?: string;
  information?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  reason?: string;
  scope?: CreateMaYiBlockRequestScope;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      blockId: 'BlockId',
      blockTimes: 'BlockTimes',
      blockType: 'BlockType',
      creatorEmpId: 'CreatorEmpId',
      director: 'Director',
      faultVersion: 'FaultVersion',
      information: 'Information',
      reason: 'Reason',
      scope: 'Scope',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockId: 'string',
      blockTimes: { 'type': 'array', 'itemType': CreateMaYiBlockRequestBlockTimes },
      blockType: 'string',
      creatorEmpId: 'string',
      director: { 'type': 'array', 'itemType': 'string' },
      faultVersion: 'string',
      information: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      scope: CreateMaYiBlockRequestScope,
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockTimes)) {
      $dara.Model.validateArray(this.blockTimes);
    }
    if(Array.isArray(this.director)) {
      $dara.Model.validateArray(this.director);
    }
    if(Array.isArray(this.information)) {
      $dara.Model.validateArray(this.information);
    }
    if(this.scope && typeof (this.scope as any).validate === 'function') {
      (this.scope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

