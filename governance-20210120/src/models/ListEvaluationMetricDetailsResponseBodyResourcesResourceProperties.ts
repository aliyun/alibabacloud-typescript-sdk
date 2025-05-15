// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties extends $dara.Model {
  /**
   * @remarks
   * The name of the resource attribute.
   * 
   * @example
   * DisplayName
   */
  propertyName?: string;
  /**
   * @remarks
   * The value of the resource attribute.
   * 
   * @example
   * example
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

