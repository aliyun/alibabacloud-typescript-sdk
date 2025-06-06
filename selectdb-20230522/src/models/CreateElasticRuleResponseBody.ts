// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateElasticRuleResponseBodyData } from "./CreateElasticRuleResponseBodyData";


export class CreateElasticRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateElasticRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
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
      data: CreateElasticRuleResponseBodyData,
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

