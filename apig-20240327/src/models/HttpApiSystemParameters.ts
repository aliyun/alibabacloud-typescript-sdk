// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiSystemParameterMapping } from "./HttpApiSystemParameterMapping";


export class HttpApiSystemParameters extends $dara.Model {
  /**
   * @remarks
   * The backend request header system parameters. If name is omitted or is an empty string, the default name for the source is used.
   */
  headerParameters?: HttpApiSystemParameterMapping[];
  /**
   * @remarks
   * The backend request query system parameters. If name is omitted or is an empty string, the default name for the source is used.
   */
  queryParameters?: HttpApiSystemParameterMapping[];
  static names(): { [key: string]: string } {
    return {
      headerParameters: 'headerParameters',
      queryParameters: 'queryParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerParameters: { 'type': 'array', 'itemType': HttpApiSystemParameterMapping },
      queryParameters: { 'type': 'array', 'itemType': HttpApiSystemParameterMapping },
    };
  }

  validate() {
    if(Array.isArray(this.headerParameters)) {
      $dara.Model.validateArray(this.headerParameters);
    }
    if(Array.isArray(this.queryParameters)) {
      $dara.Model.validateArray(this.queryParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

