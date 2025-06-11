// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerInstancesShrinkRequest extends $dara.Model {
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
  specsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      destType: 'DestType',
      instanceName: 'InstanceName',
      onlyBindable: 'OnlyBindable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
      specsShrink: 'Specs',
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
      specsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

