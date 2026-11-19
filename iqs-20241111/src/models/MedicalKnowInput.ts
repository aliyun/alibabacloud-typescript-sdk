// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalKnowInput extends $dara.Model {
  /**
   * @remarks
   * The medical, drug, disease, or food entity whose properties are to be queried.
   * 
   * @example
   * Amoxicillin Capsules
   */
  query?: string;
  /**
   * @remarks
   * The entity query type. Valid values:
   * - finding: disease
   * - food: food
   * - medicine: medicine
   * If this parameter is not specified, the type is automatically identified.
   * 
   * @example
   * medicine
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

