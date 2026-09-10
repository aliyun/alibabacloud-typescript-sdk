// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusNamedQueryEntry extends $dara.Model {
  /**
   * @remarks
   * The PromQL query expression.
   * 
   * @example
   * avg(cpu_usage) > 80
   */
  expr?: string;
  /**
   * @remarks
   * The query name, such as $A or $B, referenced by the condition trigger.
   * 
   * @example
   * cpuQuery
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      expr: 'expr',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expr: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

