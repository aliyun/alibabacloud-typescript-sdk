// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class GenerateMergedTableRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: Schema;
  /**
   * @remarks
   * The specifications of the OpenSearch instance. This parameter is used to check whether the OpenSearch instance meets the special limits on an exclusive instance.
   * 
   * Default value: opensearch.share.common.
   * 
   * For more information, see the description of the spec field in the Quota topic.
   * 
   * @example
   * "opensearch.share.common"
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Schema,
      spec: 'string',
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

