// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetricStoreProcessorRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the ingest processor.
   * 
   * This parameter is required.
   * 
   * @example
   * filter-metrics
   */
  processorName?: string;
  static names(): { [key: string]: string } {
    return {
      processorName: 'processorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

