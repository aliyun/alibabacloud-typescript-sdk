// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAITrafficAnalysisStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The enabling status. Valid values:
   * 
   * - **open**: Enables the feature.
   * 
   * - **close**: Disables the feature.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

