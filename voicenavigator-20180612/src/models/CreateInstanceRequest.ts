// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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
  nluServiceParamsJson?: string;
  unionInstanceId?: string;
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

