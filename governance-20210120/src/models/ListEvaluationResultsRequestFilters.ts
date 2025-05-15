// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationResultsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. Valid values:
   * 
   * *   ResourceId: the resource ID.
   * *   ResourceName: the name of the resource.
   * *   ResourceType: the resource type.
   * 
   * @example
   * ResourceId
   */
  key?: string;
  /**
   * @remarks
   * The list of filter condition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

