// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecProtectionGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The switch of the API security module.
   * 
   * @example
   * 1
   */
  apisecStatus?: number;
  /**
   * @remarks
   * The switch of the compliance check feature.
   * 
   * @example
   * 0
   */
  reportStatus?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * group1
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The switch of the tracing and auditing feature.
   * 
   * @example
   * 0
   */
  traceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      apisecStatus: 'ApisecStatus',
      reportStatus: 'ReportStatus',
      resourceGroup: 'ResourceGroup',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apisecStatus: 'number',
      reportStatus: 'number',
      resourceGroup: 'string',
      traceStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

