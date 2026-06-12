// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLServiceAnalysisParam } from "./MlserviceAnalysisParam";


export class GetMLServiceResultsRequest extends $dara.Model {
  /**
   * @remarks
   * - true: The request can use a built-in system service.
   * 
   * - false: The request cannot use a built-in system service.
   * 
   * @example
   * true
   */
  allowBuiltin?: boolean;
  /**
   * @remarks
   * The request struct.
   */
  body?: MLServiceAnalysisParam;
  /**
   * @remarks
   * The version number of the algorithm. Different versions correspond to different algorithms.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      allowBuiltin: 'allowBuiltin',
      body: 'body',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowBuiltin: 'boolean',
      body: MLServiceAnalysisParam,
      version: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

