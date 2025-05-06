// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec } from "./QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec";


export class QueryConvertInstancePriceRequestNamespaceResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * lm-test-default
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpec?: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      resourceSpec: QueryConvertInstancePriceRequestNamespaceResourceSpecsResourceSpec,
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

