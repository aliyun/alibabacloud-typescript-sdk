// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportNodeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed description of the exception.
   * 
   * This parameter is required.
   * 
   * @example
   * GPU 0 reporting XID 79 (fallen off bus)
   */
  description?: string;
  /**
   * @remarks
   * The diagnosis type. Valid values:
   * - QUICK: quick diagnosis
   * - COMPREHENSIVE: comprehensive diagnosis
   * 
   * This parameter is required.
   * 
   * @example
   * COMPREHENSIVE
   */
  diagnosisType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-eowpxmsldd
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diagnosisType: 'DiagnosisType',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diagnosisType: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

