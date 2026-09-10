// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian business workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Describe this application
   */
  description?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test001
   */
  name?: string;
  /**
   * @remarks
   * The NLU access method.
   * 
   * - Managed
   * 
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

