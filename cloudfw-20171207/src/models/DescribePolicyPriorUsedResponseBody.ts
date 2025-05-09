// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyPriorUsedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The lowest priority of existing access control policies.
   * 
   * >  The value -1 indicates the lowest priority.
   * 
   * @example
   * 150
   */
  end?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The highest priority of existing access control policies.
   * 
   * >  The value 0 indicates the highest priority.
   * 
   * @example
   * -1
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      requestId: 'RequestId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      requestId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

