// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBVersionInfosResponseBodyVersionDetails extends $dara.Model {
  /**
   * @remarks
   * The queried minor version information about the instance in Serverless mode.
   * 
   * @example
   * "Serverless": [
   *                 {
   *                     "engineVersion": "6.0",
   *                     "versionInfos": [
   *                         {
   *                             "kernelVersion": "v2.0.0.5",
   *                             "releaseDate": "2023-05-28T07:48Z",
   *                             "expirationDate": "2026-05-28T07:48Z"
   *                         },
   *                         {
   *                             "kernelVersion": "v2.0.0.1",
   *                             "releaseDate": "2023-03-27T12:44Z",
   *                             "expirationDate": "2026-03-27T12:44Z"
   *                         },
   *                         {
   *                             "kernelVersion": "v1.0.5.1",
   *                             "releaseDate": "2023-02-22T11:39Z",
   *                             "expirationDate": "2026-02-22T11:39Z"
   *                         }
   *                     ]
   *                 }
   * ]
   */
  serverless?: any;
  /**
   * @remarks
   * The queried minor version information about the instance in elastic storage mode.
   * 
   * @example
   * "StorageElasic": [
   *                 {
   *                     "engineVersion": "6.0",
   *                     "versionInfos": [
   *                         {
   *                             "kernelVersion": "v6.3.11.2",
   *                             "releaseDate": "2023-08-17T09:14Z",
   *                             "expirationDate": "2026-08-17T09:14Z"
   *                         }
   *           },
   *                 {
   *                     "engineVersion": "7.0",
   *                     "versionInfos": [
   *                         {
   *                             "kernelVersion": "v7.0.2.0",
   *                             "releaseDate": "2023-08-09T06:47Z",
   *                             "expirationDate": "2026-08-09T06:47Z"
   *                         },
   *                         {
   *                             "kernelVersion": "v7.0.1.8",
   *                             "releaseDate": "2023-05-25T06:56Z",
   *                             "expirationDate": "2026-05-25T06:56Z"
   *                         }
   *                     ]
   *                 }
   * ]
   */
  storageElastic?: any;
  static names(): { [key: string]: string } {
    return {
      serverless: 'Serverless',
      storageElastic: 'StorageElastic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverless: 'any',
      storageElastic: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

