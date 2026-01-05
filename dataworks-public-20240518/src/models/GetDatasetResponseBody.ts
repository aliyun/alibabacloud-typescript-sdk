// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dataset } from "./Dataset";


export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset information.
   */
  dataset?: Dataset;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

