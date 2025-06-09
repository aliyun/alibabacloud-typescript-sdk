// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLDataSetParam } from "./MldataSetParam";


export class CreateAnnotationDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * The data structure of the request.
   */
  body?: MLDataSetParam;
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * cb8cc4eb51a85e823471cdb368fae9be
   */
  datasetId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      datasetId: 'datasetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLDataSetParam,
      datasetId: 'string',
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

