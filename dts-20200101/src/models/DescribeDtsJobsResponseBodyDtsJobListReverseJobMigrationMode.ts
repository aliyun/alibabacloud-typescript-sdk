// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListReverseJobMigrationMode extends $dara.Model {
  /**
   * @remarks
   * Indicates whether initial full data synchronization is performed. Valid values:
   * 
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  dataInitialization?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data synchronization is performed. Valid values:
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  dataSynchronization?: boolean;
  /**
   * @remarks
   * Indicates whether full data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  fullDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether incremental data verification is performed. Valid values:
   * -  **true**: yes
   * -  **false**: no
   * 
   * @example
   * true
   */
  incDataCheck?: boolean;
  structureDataCheck?: boolean;
  /**
   * @remarks
   * Indicates whether initial schema synchronization is performed. Valid values:
   * -  **true**
   * -  **false**
   * 
   * @example
   * true
   */
  structureInitialization?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataInitialization: 'DataInitialization',
      dataSynchronization: 'DataSynchronization',
      fullDataCheck: 'FullDataCheck',
      incDataCheck: 'IncDataCheck',
      structureDataCheck: 'StructureDataCheck',
      structureInitialization: 'StructureInitialization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitialization: 'boolean',
      dataSynchronization: 'boolean',
      fullDataCheck: 'boolean',
      incDataCheck: 'boolean',
      structureDataCheck: 'boolean',
      structureInitialization: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

