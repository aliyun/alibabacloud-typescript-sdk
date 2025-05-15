// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource property.
   * 
   * @example
   * AccessKey Pair Last Used At
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * AkLastUsedTime
   */
  propertyName?: string;
  /**
   * @remarks
   * The type of the resource property.
   * 
   * @example
   * String
   */
  propertyType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      propertyName: 'PropertyName',
      propertyType: 'PropertyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      propertyName: 'string',
      propertyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

