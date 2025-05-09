// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 102E8E24-0387-531D-8A75-1C0AE7DD03E5
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the data source has been modified:
   * 
   * - true: Yes
   * - false: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

