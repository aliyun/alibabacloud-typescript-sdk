// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyElasticRuleResponseBodyData } from "./ModifyElasticRuleResponseBodyData";


export class ModifyElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyElasticRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5ED62C81-9948-5612-81E1-EA3853752306
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyElasticRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

