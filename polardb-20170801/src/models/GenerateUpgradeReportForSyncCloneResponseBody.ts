// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUpgradeReportForSyncCloneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @example
   * pc-k2j96w169uhu868l8
   */
  sourceDBClusterId?: string;
  /**
   * @example
   * 2312111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sourceDBClusterId: 'SourceDBClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sourceDBClusterId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

