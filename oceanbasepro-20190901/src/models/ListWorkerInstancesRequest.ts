// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerInstancesRequest extends $dara.Model {
  /**
   * @example
   * KAFKA
   */
  destType?: string;
  /**
   * @example
   * i4katz****
   */
  instanceName?: string;
  /**
   * @example
   * true
   */
  onlyBindable?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * OCEANBASE
   */
  sourceType?: string;
  specs?: string[];
  static names(): { [key: string]: string } {
    return {
      destType: 'DestType',
      instanceName: 'InstanceName',
      onlyBindable: 'OnlyBindable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destType: 'string',
      instanceName: 'string',
      onlyBindable: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      specs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

