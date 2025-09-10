// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumeProcessorsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the consumption processor.
   * 
   * @example
   * filter-get-request
   */
  displayName?: string;
  /**
   * @remarks
   * The offset. Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: string;
  /**
   * @remarks
   * The identifier of the consumption processor.
   * 
   * @example
   * consume-processor-1
   */
  processorName?: string;
  /**
   * @remarks
   * The number of entries. Default value: 200.
   * 
   * @example
   * 100
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      offset: 'offset',
      processorName: 'processorName',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      offset: 'string',
      processorName: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

