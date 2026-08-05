// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperienceDataRequest extends $dara.Model {
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * file
   */
  dataType?: string;
  /**
   * @remarks
   * - true
   * - false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'dataType',
      dryRun: 'dryRun',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      dryRun: 'boolean',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

