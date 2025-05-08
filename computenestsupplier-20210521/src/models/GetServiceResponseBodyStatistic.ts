// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The total number of service instances that belong to the service. The service instances that are deleted are counted.
   * 
   * @example
   * 75
   */
  accumulativeInstanceCount?: number;
  /**
   * @remarks
   * The total amount consumed for trial service instances. Unit: CNY.
   * 
   * @example
   * 80.35
   */
  accumulativePocAmount?: number;
  /**
   * @remarks
   * The total number of users who use the service. The historical users are counted.
   * 
   * @example
   * 60
   */
  accumulativeUserCount?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per instance. Unit: CNY.
   * 
   * @example
   * 40.17
   */
  averagePocAmount?: number;
  /**
   * @remarks
   * The average duration for which trial service instances are in use. Unit: Hour.
   * 
   * @example
   * 1
   */
  averagePocDuration?: number;
  /**
   * @remarks
   * The average amount consumed for trial service instances per a period of time. Unit: CNY.
   * 
   * @example
   * 167.9
   */
  averagePocUnitAmount?: number;
  /**
   * @remarks
   * The number of online service instances. It means the number of service instances that are successfully deployed.
   * 
   * @example
   * 20
   */
  deployedServiceInstanceCount?: number;
  /**
   * @remarks
   * The number of online users. It means the number of users who successfully deployed the service instances.
   * 
   * @example
   * 10
   */
  deployedUserCount?: number;
  /**
   * @remarks
   * The number of service applications that are in the Submitted state.
   * 
   * @example
   * 10
   */
  submittedUsageCount?: number;
  static names(): { [key: string]: string } {
    return {
      accumulativeInstanceCount: 'AccumulativeInstanceCount',
      accumulativePocAmount: 'AccumulativePocAmount',
      accumulativeUserCount: 'AccumulativeUserCount',
      averagePocAmount: 'AveragePocAmount',
      averagePocDuration: 'AveragePocDuration',
      averagePocUnitAmount: 'AveragePocUnitAmount',
      deployedServiceInstanceCount: 'DeployedServiceInstanceCount',
      deployedUserCount: 'DeployedUserCount',
      submittedUsageCount: 'SubmittedUsageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeInstanceCount: 'number',
      accumulativePocAmount: 'number',
      accumulativeUserCount: 'number',
      averagePocAmount: 'number',
      averagePocDuration: 'number',
      averagePocUnitAmount: 'number',
      deployedServiceInstanceCount: 'number',
      deployedUserCount: 'number',
      submittedUsageCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

