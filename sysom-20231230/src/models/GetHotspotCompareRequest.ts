// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotCompareRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The end time 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725415774000
   */
  beg1End?: number;
  /**
   * @remarks
   * The start time 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725415474000
   */
  beg1Start?: number;
  /**
   * @remarks
   * The end time 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725415774000
   */
  beg2End?: number;
  /**
   * @remarks
   * The start time 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725415474000
   */
  beg2Start?: number;
  /**
   * @remarks
   * The hot spot type.
   * 
   * @example
   * alloc
   */
  hotType?: string;
  /**
   * @remarks
   * The instance 1.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46"
   */
  instance1?: string;
  /**
   * @remarks
   * The instance 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  instance2?: string;
  /**
   * @remarks
   * The process of instance 1.
   * 
   * @example
   * 0
   */
  pid1?: number;
  /**
   * @remarks
   * The process of instance 2.
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  pid2?: number;
  /**
   * @remarks
   * The name of the table to query.
   * 
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      beg1End: 'beg1_end',
      beg1Start: 'beg1_start',
      beg2End: 'beg2_end',
      beg2Start: 'beg2_start',
      hotType: 'hot_type',
      instance1: 'instance1',
      instance2: 'instance2',
      pid1: 'pid1',
      pid2: 'pid2',
      table: 'table',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      beg1End: 'number',
      beg1Start: 'number',
      beg2End: 'number',
      beg2Start: 'number',
      hotType: 'string',
      instance1: 'string',
      instance2: 'string',
      pid1: 'number',
      pid2: 'number',
      table: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

