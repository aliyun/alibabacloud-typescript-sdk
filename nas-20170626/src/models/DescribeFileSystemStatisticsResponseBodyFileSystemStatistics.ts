// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic } from "./DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic";


export class DescribeFileSystemStatisticsResponseBodyFileSystemStatistics extends $dara.Model {
  fileSystemStatistic?: DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic[];
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistic: 'FileSystemStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistic: { 'type': 'array', 'itemType': DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemStatistic)) {
      $dara.Model.validateArray(this.fileSystemStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

