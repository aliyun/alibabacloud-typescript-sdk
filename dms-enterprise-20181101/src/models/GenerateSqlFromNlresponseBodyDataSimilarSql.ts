// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlFromNLResponseBodyDataSimilarSql extends $dara.Model {
  question?: string;
  /**
   * @example
   * 0.52
   */
  score?: string;
  /**
   * @example
   * SELECT * WHERE ResourceType = \\"ACS::ECS::Instance\\" AND ResourceGroupId != \\"rg-xxx\\"
   */
  sql?: string;
  thought?: string;
  static names(): { [key: string]: string } {
    return {
      question: 'Question',
      score: 'Score',
      sql: 'Sql',
      thought: 'Thought',
    };
  }

  static types(): { [key: string]: any } {
    return {
      question: 'string',
      score: 'string',
      sql: 'string',
      thought: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

