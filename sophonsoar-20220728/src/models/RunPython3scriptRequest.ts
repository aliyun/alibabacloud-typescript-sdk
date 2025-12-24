// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPython3ScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The input parameters of the Python3 script.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  params?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The Python3 script.
   * 
   * @example
   * import logging
   * def execute (params):
   *   #ip = params[\\"ip\\"]
   *   #logging.info("enter execute,ip is "+ip)
   *   success=True
   *   message=\\"OK\\"
   *   data=[]
   *   return (success,message,data)
   */
  pythonScript?: string;
  /**
   * @example
   * python2.0
   */
  pythonVersion?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      params: 'Params',
      playbookUuid: 'PlaybookUuid',
      pythonScript: 'PythonScript',
      pythonVersion: 'PythonVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      params: 'string',
      playbookUuid: 'string',
      pythonScript: 'string',
      pythonVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

