// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * 10
   */
  concurrency?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      nluAccessType: 'NluAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      concurrency: 'number',
      description: 'string',
      name: 'string',
      nluAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

