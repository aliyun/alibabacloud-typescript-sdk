// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * AccessToken
   * 
   * @example
   * 2f4ddeab8e344ed68e0402cf9b8502ffv3
   */
  accessToken?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1827811800555555
   */
  creator?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 1
   */
  executorNum?: number;
  /**
   * @example
   * 43885
   */
  id?: number;
  /**
   * @example
   * 10
   */
  jobNum?: number;
  /**
   * @example
   * http://28.5.128.3:80
   */
  leader?: string;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * 1000
   */
  maxJobs?: number;
  title?: string;
  /**
   * @example
   * 1827811800555555
   */
  updater?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      creator: 'Creator',
      enableLog: 'EnableLog',
      executorNum: 'ExecutorNum',
      id: 'Id',
      jobNum: 'JobNum',
      leader: 'Leader',
      maxConcurrency: 'MaxConcurrency',
      maxJobs: 'MaxJobs',
      title: 'Title',
      updater: 'Updater',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      creator: 'string',
      enableLog: 'boolean',
      executorNum: 'number',
      id: 'number',
      jobNum: 'number',
      leader: 'string',
      maxConcurrency: 'number',
      maxJobs: 'number',
      title: 'string',
      updater: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

