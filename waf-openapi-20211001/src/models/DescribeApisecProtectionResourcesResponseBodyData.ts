// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecProtectionResourcesResponseBodyData extends $dara.Model {
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
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * cwaf-***-waf
   */
  resource?: string;
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
      resource: 'Resource',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apisecStatus: 'number',
      reportStatus: 'number',
      resource: 'string',
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

