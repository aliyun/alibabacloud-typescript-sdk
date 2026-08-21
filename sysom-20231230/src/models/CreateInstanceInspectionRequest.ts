// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceInspectionRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @remarks
   * The anomaly items.
   */
  items?: string[];
  /**
   * @remarks
   * The metric source.
   * 
   * @example
   * sysom
   */
  metricSource?: string;
  /**
   * @remarks
   * The region to which the instance belongs.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * console
   */
  source?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      instance: 'instance',
      items: 'items',
      metricSource: 'metricSource',
      region: 'region',
      source: 'source',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      instance: 'string',
      items: { 'type': 'array', 'itemType': 'string' },
      metricSource: 'string',
      region: 'string',
      source: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

