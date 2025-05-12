// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputSuperReso extends $dara.Model {
  /**
   * @remarks
   * Indicates whether parameters related to the sampling rate are obtained. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isHalfSample?: string;
  static names(): { [key: string]: string } {
    return {
      isHalfSample: 'IsHalfSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHalfSample: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

