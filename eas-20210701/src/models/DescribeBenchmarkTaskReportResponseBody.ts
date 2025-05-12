// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBenchmarkTaskReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of ReportType is set to RAW, the details about the stress testing report are returned.
   * 
   * @example
   * {
   *     "TimestampList": ["int64"],
   *     "QPSList": ["float32"],
   *     "RTList": [
   *       {
   *         "AVG": "float32",
   *         "TP100": "float32",
   *         "TP99": "float32",
   *         "TP90": "float32",
   *         "TP50": "float32",
   *         "TP10": "float32"
   *       }
   *     ],
   *     "TrafficList": [
   *       {
   *         "Send": "float64",
   *         "Receive": "float64"
   *       }
   *     ],
   *     "StatusCode": {
   *       "200": "uint64",
   *       "450": "uint64",
   *       "500": "uint64"
   *     },
   *     "Count": "uint64",
   *     "Total": "float64",
   *     "MinRT": "float32",
   *     "AvgRT": "float32",
   *     "MaxRT": "float32",
   *     "QPS": "float32",
   *     "TotalSend": "float64",
   *     "TotalReceive": "float64",
   *     "RTDistribution": [
   *       {
   *         "Latency": "float32",
   *         "Percentage": "int"
   *       }
   *     ],
   *     "RTHistogram": [
   *       {
   *         "Count": "int",
   *         "Mark": "float32",
   *         "Frequency": "float32"
   *       }
   *     ]
   *   }
   */
  data?: any;
  /**
   * @remarks
   * If the value of ReportType is set to Report, the URL of the stress testing report is returned.
   * 
   * @example
   * http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-larec-test-015d-10007.html
   */
  reportUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      reportUrl: 'ReportUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      reportUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

