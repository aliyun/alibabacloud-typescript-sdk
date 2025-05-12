// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task. For more information, see **Table 1. Fields in the base parameter**.
   * 
   * @example
   * {
   *     "base":  {
   *          "qps": 200
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

