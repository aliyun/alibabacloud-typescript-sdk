// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize extends $dara.Model {
  /**
   * @remarks
   * The storage usage at the long-term storage tier.
   * 
   * @example
   * 21764917
   */
  longTermSize?: number;
  /**
   * @remarks
   * The storage usage at the Infrequent Access (IA) layer.
   * 
   * @example
   * 767693
   */
  lowFrequencySize?: number;
  /**
   * @remarks
   * The storage usage at the standard storage tier.
   * 
   * @example
   * 27649172
   */
  standardSize?: number;
  static names(): { [key: string]: string } {
    return {
      longTermSize: 'longTermSize',
      lowFrequencySize: 'lowFrequencySize',
      standardSize: 'standardSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTermSize: 'number',
      lowFrequencySize: 'number',
      standardSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

