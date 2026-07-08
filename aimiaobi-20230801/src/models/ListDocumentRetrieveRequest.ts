// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentRetrieveRequest extends $dara.Model {
  /**
   * @remarks
   * Document type. Valid values: 0 (default): All types. 1: Government documents. 2: Important articles. 5: Policy interpretation. 6: Legal provisions. 7: Regulations and rules. 8: General Secretary.
   * 
   * @example
   * 1
   */
  contentType?: string;
  /**
   * @remarks
   * Search scope. Valid values: 1: Title only. 0: Full text (title and content). Default is 0.
   * 
   * @example
   * 0
   */
  elementScope?: string;
  /**
   * @remarks
   * End date of issuance in yyyy-MM-dd format.
   * 
   * @example
   * 2025-07-03
   */
  endDate?: string;
  /**
   * @remarks
   * Maximum number of results to return.
   * 
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next page of results.
   * 
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * Issuing agency.
   * 
   * @example
   * 国务院办公室
   */
  office?: string;
  /**
   * @remarks
   * Search condition.
   * 
   * @example
   * 检索Query
   */
  query?: string;
  /**
   * @remarks
   * Region. Enter a province or city, such as Jilin Province or Beijing Municipality.
   * 
   * @example
   * 北京市
   */
  region?: string;
  /**
   * @remarks
   * Source. Valid values: 0: Internal (within your organization). 1: External (outside your organization).
   * 
   * @example
   * 1
   */
  source?: string;
  /**
   * @remarks
   * Start date of issuance in yyyy-MM-dd format.
   * 
   * @example
   * 2025-10-10
   */
  startDate?: string;
  /**
   * @remarks
   * - Secondary classification of document type.
   * 
   *   - When the document type is an official document: -1: Other; 0: Resolution; 1: Decision; 2: Order; 3: Bulletin; 4: Public Notice; 5: Notice; 6: Opinion; 7: Notification; 8: Circular; 9: Report; 10: Request for Instructions; 11: Approval; 12: Motion; 13: Letter
   * 
   *   - 14: Summary
   * 
   *   - When the article type is important articles: 1: important commentary 2: important theory 3: other articles
   * 
   *   - When the document genre is rules and regulations: 3: Administrative regulations 4: Supervisory regulations 5: Local regulations 7: Departmental rules 8: Others 9: Party constitution and regulations
   * 
   *   - When the article genre is a legal provision: 1: Constitution 2: Law 6: Judicial Interpretation
   * 
   * @example
   * 1
   */
  subContentType?: string;
  /**
   * @remarks
   * Supported classifications:
   * 
   * | Level 1 category                                                        | Level 2 category                                                                                                                                                                                                                                  |
   * | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | National defense and international cooperation                          | National defense. Foreign affairs. Military affairs. Work related to Hong Kong, Macao, Taiwan, and overseas Chinese.                                                                                                                              |
   * | Comprehensive administration                                            | The 20th National Congress of the Communist Party of China. Government transparency and supervision. Joint administration. Party building. Conferences and proposals. Government document management. Other administrative matters.               |
   * | State Council organizational structure                                  | State Council. General Office of the State Council. State Council agencies.                                                                                                                                                                       |
   * | Administrative and market regulation                                    | Administrative regulation. Credit regulation. Product quality supervision. Work safety supervision. Market regulation.                                                                                                                            |
   * | Economic management                                                     | National economy. Market economy. Economic system reform. State-owned asset supervision.                                                                                                                                                          |
   * | Finance, banking, commerce, and customs                                 | Finance. Banking. Auditing. Commerce. Customs.                                                                                                                                                                                                    |
   * | Personnel and social security                                           | Personnel work. Population and family planning. Work related to women and children. Poverty alleviation. Disaster reduction and relief. Public services. Social welfare and assistance. Preferential treatment and resettlement. Social security. |
   * | Public security and social management                                   | Public security. Safety. Justice. Fire control. Ethnic affairs. Religion.                                                                                                                                                                         |
   * | Science, education, culture, and sports                                 | Culture. Scientific and technological innovation. Education. Intellectual property. Press and publishing. Radio, television, and the Internet. Sports. Tourism.                                                                                   |
   * | Healthcare                                                              | Health. Medical care. Veterinary medicine.                                                                                                                                                                                                        |
   * | Urban-rural development and industrial growth                           | Urban and rural development. Industry. Transportation.                                                                                                                                                                                            |
   * | Natural resources and environmental protection                          | Land and energy resources. Civil engineering. Meteorology. Environmental protection.                                                                                                                                                              |
   * | Agriculture, forestry, water resources, fisheries, and animal husbandry | Agriculture. Forestry. Water resources. Fisheries. Animal husbandry.                                                                                                                                                                              |
   * | Others                                                                  | Others.                                                                                                                                                                                                                                           |
   * 
   * @example
   * 国防和交流合作事务
   */
  subjectClassify?: string;
  /**
   * @remarks
   * Document number.
   * 
   * @example
   * 宁民规〔2020〕5号
   */
  wordSize?: string;
  /**
   * @remarks
   * Unique identifier of the Model Studio workspace. For more information, see [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      elementScope: 'ElementScope',
      endDate: 'EndDate',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      office: 'Office',
      query: 'Query',
      region: 'Region',
      source: 'Source',
      startDate: 'StartDate',
      subContentType: 'SubContentType',
      subjectClassify: 'SubjectClassify',
      wordSize: 'WordSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      elementScope: 'string',
      endDate: 'string',
      maxResults: 'number',
      nextToken: 'string',
      office: 'string',
      query: 'string',
      region: 'string',
      source: 'string',
      startDate: 'string',
      subContentType: 'string',
      subjectClassify: 'string',
      wordSize: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

