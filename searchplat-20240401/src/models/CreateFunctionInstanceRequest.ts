// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionInstanceRequestCreateParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * config
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * {\\"DDL\\": [{\\"table\\": \\"schools\\",\\"columns\\": [{\\"column\\": \\"class\\",\\"column_des\\": \\"班级\\",\\"type\\": \\"str\\",\\"example\\": [\\"高一3班\\",\\"火箭班\\"],\\"value_mapping\\": {}},{\\"column\\": \\"school\\",\\"column_des\\": \\"学校\\",\\"type\\": \\"str\\",\\"example\\": [\\"清华大学\\",\\"北京大学\\"],\\"value_mapping\\": {}}]},{\\"table\\": \\"students\\",\\"columns\\": [{\\"column\\": \\"name\\",\\"column_des\\": \\"姓名\\",\\"type\\": \\"int\\",\\"example\\": [10002,100001],\\"value_mapping\\": [[10002,100001],[\\"张三\\",\\"李四\\"]]}]}],\\"foreign keys\\":[\\"table.column_1=table2.column_2\\",\\"table.column_1=table2.column_2\\"],\\"UDF\\": [[\\"初始节点\\",\\"aa\\"],[\\" (sub_action >100095 or action = 0001) and station =100001\\",\\"bbb\\"]],\\"Fewshot\\": [{\\"query\\": \\"叫张三的学生有多少\\",\\"sql\\": \\"SELECT COUNT(*) FROM students WHERE name = 10002\\"}]}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The creation parameters.
   */
  createParameters?: CreateFunctionInstanceRequestCreateParameters[];
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * - PAAS
   * - SAAS.
   * 
   * @example
   * PAAS
   */
  functionType?: string;
  /**
   * @remarks
   * The configuration or model name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The service ID. Valid values:
   * - ops-query-analyze-nl2sql-001
   * - ops-embedding-dim-reduction-001: vector dimension reduction.
   * 
   * This parameter is required.
   * 
   * @example
   * ops-query-analyze-nl2sql-001
   */
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      createParameters: 'createParameters',
      description: 'description',
      functionType: 'functionType',
      instanceName: 'instanceName',
      modelType: 'modelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createParameters: { 'type': 'array', 'itemType': CreateFunctionInstanceRequestCreateParameters },
      description: 'string',
      functionType: 'string',
      instanceName: 'string',
      modelType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createParameters)) {
      $dara.Model.validateArray(this.createParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

