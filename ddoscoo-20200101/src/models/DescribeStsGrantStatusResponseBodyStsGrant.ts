// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStsGrantStatusResponseBodyStsGrant extends $dara.Model {
  /**
   * @remarks
   * The authorization status. Valid values:
   * 
   * *   **0**: Anti-DDoS Pro or Anti-DDoS Premium is not authorized to access other cloud services.
   * *   **1**: Anti-DDoS Pro or Anti-DDoS Premium is authorized to access other cloud services.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

